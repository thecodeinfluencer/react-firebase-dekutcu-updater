import All from "../fragments/All";
import Available from "../fragments/Available";
import Borrowed from "../fragments/Borrowed";
import Borrower from "../fragments/Borrower";
import Add from "../fragments/Add";
import Edit from "../fragments/Edit";

export const cards = [
  { title: "All Books", icon: "fa-book", theme: "", value: 56 },
  { title: "Available Books", icon: "fa-book", theme: "", value: 34 },
  { title: "Borrowed Books", icon: "fa-book", theme: "", value: 22 },
];

export const books = [
  {
    id: "2634",
    title: "The Book",
    number: 30,
    available: 5,
  },
  {
    id: "2254",
    title: "The Book",
    number: 30,
    available: 5,
  },
  {
    id: "2154",
    title: "The Book",
    number: 30,
    available: 5,
  },
  {
    id: "2604",
    title: "The Book",
    number: 30,
    available: 5,
  },
  {
    id: "2654",
    title: "The Book",
    number: 30,
    available: 5,
  },
];

export const tabs = [
  { title: "All Books", component: <All /> },
  { title: "Available books", component: <Available /> },
  { title: "Borrowed Books", component: <Borrowed /> },
  { title: "Add Borower", component: <Borrower /> },
  { title: "Add Book to Records", component: <Add /> },
  { title: "Edit Book Records", component: <Edit /> },
];
