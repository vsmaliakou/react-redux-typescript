import * as TodoActionCreators from "./todo";
import * as UserActionCreators from "./user";

export const allActionCreators = {
  ...UserActionCreators,
  ...TodoActionCreators,
};