function findAccountById(accounts, id) {
   const foundAccount = accounts.find(account => account.id === id);

  // Return the found account
  return foundAccount;
}

function sortAccountsByLastName(accounts) {
    const sortedAccounts = accounts.sort((accountA, accountB) =>
    accountA.name.last.localeCompare(accountB.name.last)
  );

  // Return the sorted array
  return sortedAccounts;
}

function getTotalNumberOfBorrows(account, books) {
  // Extract the account ID
  const accountId = account.id;

  // Use the reduce() method to count the total number of borrows
  const totalBorrows = books.reduce((acc, book) => {
    // Count borrows for the current book that match the account ID
    const borrowCount = book.borrows.filter(borrow => borrow.id === accountId).length;

    // Add the borrow count to the accumulator
    return acc + borrowCount;
  }, 0);

  // Return the total number of borrows
  return totalBorrows;
}


function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;

  // Use filter() to get the books currently checked out by the account
  const checkedOutBooks = books.filter((book) =>
    book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned)
  );

  // Map the authors to the books
  const booksWithAuthors = checkedOutBooks.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });

  return booksWithAuthors;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
