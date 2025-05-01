import { useState, useRef, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchBooksQuery } from "../features/search/openLibraryApi";
import { ResultItem } from "./ResultItem";
import { LoadingSpinner } from "./LoadingSpinner";
import type { Book } from "../types/book";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 240px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 20px;
  font-size: 14px;
  border: 0;
  background: #e3e3e3;
  color: #000;

  &::placeholder {
    color: #7e7e7e;
  }

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0px;
  width: 435px;
  background-color: #e3e3e3;
  z-index: 1;
  padding: 0;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Arrow = styled.div`
  position: relative;
  top: -6px;
  right: -340px;
  width: 12px;
  height: 12px;
  background: #e3e3e3;
  border-left: 1px solid #e3e3e3;
  border-top: 1px solid #e3e3e3;
  transform: rotate(45deg);
  z-index: -1;

  @media screen and (max-width: 480px) {
    right: -80%;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: -11px;
`;

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const debouncedQuery = useDebounce(query, 500);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error } = useSearchBooksQuery(debouncedQuery, {
    skip: !debouncedQuery.trim(),
  });

  const results: Book[] = data?.docs?.slice(0, 5) || [];

  useEffect(() => {
    if (debouncedQuery.trim() && results.length > 0) {
      setIsDropdownVisible(true);
    }
  }, [debouncedQuery, results.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Input
        type="text"
        placeholder="Quick search..."
        value={query}
        aria-label="Search books"
        onChange={(e) => setQuery(e.target.value)}
      />

      {isLoading && <LoadingSpinner />}

      {!isLoading &&
        !error &&
        debouncedQuery &&
        results.length === 0 &&
        isDropdownVisible && (
          <Dropdown>
            <Arrow />
            <p style={{ padding: "8px 16px" }}>
              No results found for "{debouncedQuery}"
            </p>
          </Dropdown>
        )}

      {isDropdownVisible && results.length > 0 && (
        <Dropdown>
          <Arrow />
          <List>
            {results.map((book: Book) => (
              <ResultItem
                key={book.key}
                title={book.title}
                author={book.author_name?.[0]}
                coverId={book.cover_i}
              />
            ))}
          </List>
        </Dropdown>
      )}
    </Wrapper>
  );
};
