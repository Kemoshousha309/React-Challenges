import "./Pagination.css";

interface PaginationProps {
  pagesNumber: number;
  current: number;
  pageClick: (num: number) => void;
  nextClick: () => void;
  pervClick: () => void;
}

export function Pagination({
  pagesNumber,
  current,
  pageClick,
  nextClick,
  pervClick,
}: PaginationProps) {
  const pagesNumbers = getNumbers(pagesNumber, current);
  return (
    <div className="pagination-container">
      <span onClick={pervClick} className="director">
        Prev
      </span>
      {pagesNumbers[0] == 0 ? null : " . . . "}
      {pagesNumbers.map((num) => {
        if (num === current) {
          return (
            <span
              className="page-number current"
              onClick={() => pageClick(num)}
            >
              {num+1}
            </span>
          );
        }
        return (
          <span className="page-number" onClick={() => pageClick(num)}>
            {num+1}
          </span>
        );
      })}
      {pagesNumbers[pagesNumbers.length - 1] == current ? null : " . . . "}
      <span onClick={nextClick} className="director">
        Next
      </span>
    </div>
  );
}

function getNumbers(total: number, current: number) {
  const numbers = [current];
  for (let i = current + 1; i <= current + 5; i++) {
    if (i >= total) break;
    numbers.push(i);
  }
  for (let i = current - 1; i >= current - 5; i--) {
    if (i < 1) break;
    numbers.unshift(i);
  }
  return numbers;
}
