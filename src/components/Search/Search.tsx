import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

import styles from "./Search.module.scss";

import { Button } from "components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement & FormFields>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.text}
          id="search"
          name="username"
          placeholder="Введите GitHub username..."
          autoComplete="off"
        ></input>
        {hasError && <div className={styles.error}>No results</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

// with ref

// import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

// import styles from "./Search.module.scss";
// import { useRef } from "react";
// import { Button } from "components/Button";

// interface SearchProps {
//   hasError: boolean;
//   onSubmit: (text: string) => void;
// }

// export const Search = ({ hasError, onSubmit }: SearchProps) => {
//   const searchRef = useRef<HTMLInputElement | null>(null);
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     const text = searchRef.current ? searchRef.current.value : "";
//     console.log("render", searchRef);
//     if (text) {
//       onSubmit(text);
//       if (searchRef.current) {
//         searchRef.current.value = "";
//       }
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className={styles.search}>
//         <label htmlFor="search" className={styles.label}>
//           <SearchIcon />
//         </label>
//         <input
//           ref={searchRef}
//           type="text"
//           className={styles.text}
//           id="search"
//           name="username"
//           placeholder="Введите GitHub username..."
//           autoComplete="off"
//         ></input>
//         {hasError && <div className={styles.error}>No results</div>}
//         <Button>Search</Button>
//       </div>
//     </form>
//   );
// };
