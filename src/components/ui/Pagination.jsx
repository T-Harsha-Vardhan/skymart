import Button from "./Button";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  disabled = false,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={disabled || currentPage === 1}
      >
        Previous
      </Button>

      <div className="text-text font-bold">
        Page {currentPage} of {totalPages}
      </div>

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={disabled || currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
