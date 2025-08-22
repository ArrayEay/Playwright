import type { User } from '../types/user'
const validUsers: User[] = [
  {
    username: "standard_user",
    password: "secret_sauce",
  },
  {
    username: "problem_user",
    password: "secret_sauce",
  },
  {
    username: "performance_glitch_user",
    password: "secret_sauce",
  },
  {
    username: "error_user",
    password: "secret_sauce",
  },
  {
    username: "visual_user",
    password: "secret_sauce",
  },
];

const invalidUsers: User[] = [
  { 
    username: "standard_user",
    password: "invalid_password",
  },
  {
    username: "standard_user",
    password: " ",
  },
  {
    username: "standard_user",
    password: "",
  },
  {
    username: "locked_out_user",
    password: "invalid_password",
  },
  {
    username: "locked_out_user",
    password: " ",
  },
  {
    username: "locked_out_user",
    password: "",
  },
  {
    username: "problem_user",
    password: "invalid_password",
  },
  {
    username: "problem_user",
    password: " ",
  },
  {
    username: "problem_user",
    password: "",
  },
  {
    username: "performance_glitch_user",
    password: "invalid_password",
  },
  {
    username: "performance_glitch_user",
    password: " ",
  },
  {
    username: "performance_glitch_user",
    password: "",
  },
  {
    username: "error_user",
    password: "invalid_password",
  },
  {
    username: "error_user",
    password: " ",
  },
  {
    username: "error_user",
    password: "",
  },
  {
    username: "visual_user",
    password: "invalid_password",
  },
  {
    username: "visual_user",
    password: " ",
  },
  {
    username: "visual_user",
    password: "",
  },
  {
    username: "invalid_user",
    password: "secret_sauce",
  },
  {
    username: "invalid_user",
    password: "invalid_password",
  },
  {
    username: "invalid_user",
    password: " ",
  },
  {
    username: "invalid_user",
    password: "",
  },
  {
    username: "",
    password: "",
  },
  {
    username: "",
    password: " ",
  },
  {
    username: " ",
    password: "",
  },
  {
    username: " ",
    password: " ",
  },
  {
    username: "",
    password: "secret_sauce",
  },
  {
    username: " ",
    password: "secret_sauce",
  },
];

export { validUsers, invalidUsers };
