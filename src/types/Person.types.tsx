// separating types is useful when you have a lot of types and you want to group them together

export type Name = {
    firstName: string;
    lastName: string;
}

// types can aslo be reused in other types
export type personProps = {
    name: Name;
}

export type AuthUser = {
    name: string;
    email: string;
}
