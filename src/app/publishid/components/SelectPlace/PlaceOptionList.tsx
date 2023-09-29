"use client";
import useSWR from "swr";
import { forwardRef } from "react";
import { getAllPlaces } from "@/db";

type Props = {
  onChange: (place: string) => void;
};

export const PlaceOptionList = forwardRef<HTMLSelectElement, Props>(
  ({ onChange }, ref) => {
    const { data: places, isLoading } = useSWR("/places", getAllPlaces);
    return isLoading ? (
      <>Loading...</>
    ) : (
      <select
        ref={ref}
        id="select_place"
        className="text-text-on-bg-primary w-1/4 border-primary border-2 rounded-sm"
        required
        onChange={(e) => onChange(e.target.value)}
      >
        <>
          <option value="">選択してください</option>
          {places
            ? places.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))
            : null}
        </>
      </select>
    );
  }
);
