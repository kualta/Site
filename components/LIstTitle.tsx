import Link from "next/link";

export const ListTitle = (props: { href: string; text: string }) => {
  return (
    <Link
      href={props.href}
      className={
        "flex items-center text-base sm:text-lg underline-offset-4 align-text-top font-semibold group text-center hover:underline "
      }
    >
      {props.text}
    </Link>
  );
};
