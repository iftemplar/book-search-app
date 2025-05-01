import styled from "styled-components";
const defaultCover = "../public/no-cover.png";

type Props = {
  title: string;
  author?: string;
  coverId?: string;
};

const Item = styled.li`
  padding: 12px 16px;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Title = styled.a`
  font-weight: 500;
  font-size: 17px;
  color: #383838;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Author = styled.span`
  display: block;
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cover = styled.img`
  width: 40px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
`;

export const ResultItem = ({ title, author, coverId }: Props) => {
  const amazonLink = `https://www.amazon.com/s?k=${encodeURIComponent(title)}`;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-S.jpg`
    : defaultCover;

  return (
    <Item>
      {coverUrl && <Cover src={coverUrl} alt={title} />}
      <Info>
        <Title href={amazonLink} target="_blank" rel="noopener noreferrer">
          {title}
        </Title>
        {author && <Author>by {author}</Author>}
      </Info>
    </Item>
  );
};
