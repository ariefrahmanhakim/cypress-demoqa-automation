# Cypress Transjakarta Test

Project automation test UI dengan Cypress.

## Isi Project

```text
cypress-transjakarta-test/
|-- cypress.config.js                # Konfigurasi utama Cypress
|-- package.json                     # Metadata project, scripts npm, dan dependency
|-- runner.sh                        # Wrapper script untuk menjalankan Cypress (open/run)
|-- cypress/
   |-- e2e/
   |   |-- droppable.cy.js          # Test case E2E untuk fitur droppable
   |   |-- resizeable.cy.js         # Test case E2E untuk fitur resizeable
   |   `-- webtables.cy.js          # Test case E2E untuk fitur web tables
   |-- fixtures/
   |   |-- user.csv                 # Data uji CSV (single user)
   |   `-- users.csv                # Data uji CSV (multiple users)
   |-- pages/
   |   |-- droppablePage.js         # Page object untuk halaman droppable
   |   |-- resizeablePage.js        # Page object untuk halaman resizeable
   |   `-- webTablesPage.js         # Page object untuk halaman web tables
   |-- screenshots/                 # Hasil screenshot saat test gagal/diambil
   |-- support/
   |   `-- e2e.js                   # Setup global Cypress untuk E2E
   `-- tests/
       |-- bulkCommands.js          # Custom commands untuk operasi bulk/data-driven
       |-- droppableCommands.js     # Custom commands khusus droppable
       |-- resizeableCommands.js    # Custom commands khusus resizeable
       `-- webTablesCommands.js     # Custom commands khusus web tables
```

## Cara Menjalankan

Install dependency:

```bash
npm install
```

Jalankan dari Terminal Bash:

```bash
sh runner.sh
```

ATAU

```bash
npx cypress open
```

ATAU

```bash
npx cypress run --browser "chrome"
```

Setting pada file runner.sh:

`open` artinya mode interactive (GUI Cypress kebuka, bisa pilih test manual).

- pilih E2E pada GUI terbuka
- lalu pilih Chrome

`run` artinya mode headless (jalan tanpa GUI, cocok untuk run cepat/CI).


Contoh jika ingin jalankan 1 spec:

```bash
sh runner.sh run --spec cypress/e2e/droppable.cy.js
```

## Catatan

- Script `runner.sh` akan coba menutup proses Cypress lama sebelum run.
- Format umum:

```bash
sh runner.sh [open|run] [cypress-options]
```

## Versi Environment

- `npm`: `10.8.2`
- `npx`: `10.8.2`
- `node`: `v20.18.1`
- `bash`: `version 5.2.37(1)-release (x86_64-pc-msys)`
