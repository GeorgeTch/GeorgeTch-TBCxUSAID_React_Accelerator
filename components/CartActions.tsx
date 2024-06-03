"use client";
import React from "react";
import {
  cartItemDecrementAction,
  createCartItemAction,
  removeCartItemAction,
} from "../src/app/actions";

export default function CartActions({ id }) {
  async function handleDecrement(id) {
    await cartItemDecrementAction(id);
  }

  async function handleIncrement(id) {
    await createCartItemAction(id);
  }

  async function handleRemove(id) {
    await removeCartItemAction(id);
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          handleIncrement(id);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleDecrement(id);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          handleRemove(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}
