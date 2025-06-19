# My Reading List 📚

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## SQLite Setup

```bash
sqlite3 my-reading-list.sqlite < db/schema.sql
```

## 🛠 Implementation Notes

### Nuxt Stack & Libraries

- **Nuxt 3** was used as the full-stack framework with `pages/`, `layouts/`, and `server/api/` structure.
- **Nuxt UI** provided pre-styled components such as `UButton`, `UCard`, `USwitch`, and `UForm` for a clean and accessible UI.
- **SQLite** was chosen for simplicity and local development convenience.

### Component Design

- **BookListItem.vue** handles display, read toggle, and deletion of each book. The toggle is reactive via `v-model` and emits updates directly inside the toggle logic.
- **BookForm.vue** provides a controlled form to add new books. Uses `reactive()` state and submits via `$fetch`.
- **Layout** is defined in `layouts/default.vue` and includes a simple header and content slot.

### Server Routes

- Server endpoints under `/server/api/books` perform CRUD operations directly on the SQLite database using the sqlite3 Node.js driver.
- A shared `useDB()` utility wraps the SQLite connection logic, making database access clean and reusable.

### Routing

- `/` – displays the current reading list with actions.
- `/add-book` – page to submit a new book entry.

### Known Tradeoffs / Assumptions

- There is no client-side form validation beyond HTML5 `required`; server-side validation is minimal.
- Book titles are not required to be unique.
- The app assumes a single-user context (no auth).
