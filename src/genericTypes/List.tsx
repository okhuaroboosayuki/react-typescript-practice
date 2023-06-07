import { ReactNode } from "react";

// generic props are props that can be used for different types of data wether string, number, boolean, etc.
type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
}

export const List = <T extends ReactNode>({ items, onClick }: ListProps<T>) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            {items.map((item, index) => (
                <div key={index} onClick={() => onClick(item)}>
                    {item}
                </div>
            )
            )}
        </div>
    )
}