"use client";

import React from "react";
import { createCartItemAction } from "../src/app/actions";
import { useLocale } from "next-intl";

export default function AddToCartBtn({ id }) {
  const locale = useLocale();
  async function handleAddToCart(id) {
    await createCartItemAction(id);
  }
  return (
    <button
      onClick={() => {
        handleAddToCart(id);
      }}
    >
      {locale === "en" ? "Add to cart" : "კალათაში დამატება"}
    </button>
  );
}
