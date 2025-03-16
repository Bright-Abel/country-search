import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-blue-500: #56b8ff;

    /* Light Mode Colors */
    --color-bg: #dae2ec;
    --color-text: #1a1d21;

    --color-100: #f1f5f9;
    --color-200: #a3b2c7;
    --color-300: #e9ecef;
    --color-400: #dee2e6;
    --color-500: #ced4da;
    --color-600: #adb5bd;
    --color-700: #6c757d;
    --color-800: #f1f5f8;
    --color-900: var(--color-bg);
    --color-950: #ea6365;

    /* UI Elements */
    --loader-bg: #e5e7eb;
    --table-header-bg: var(--color-100);
    --primary-text: #64748b;
    --table-row-selected-bg: #abb8c4;
    --table-row-selected-text: var(--color-100);
    --table-row-default-bg: #ffffff;
    --search-bg: #ffffff;
    --search-border: #e2e8f0;
    --modal-bg: #ffffff;
    --modal-text: #484554;
    --navbar-bg: var(--color-800);
    --details-bg: #f3f4f6;
    --details-title: #4a5565;
    --details-grid: #ffffff;
    --details-strong: #6a6676;
    --details-strong-p: var(--details-title);
  }

  .dark {
    --color-bg: #383544;
    --color-text: #ada9bb;

    --color-100: var(--color-text);
    --color-200: var(--color-bg);
    --color-300: #484554;
    --color-400: #6a6676;
    --color-500: #04050c;
    --color-600: #64748b;
    --color-700: #1a1d21;
    --color-800: #abb8c4;
    --color-900: #76828d;
    --color-950: #d3b69c;

    /* UI Elements */
    --loader-bg: #364153;
    --table-header-bg: var(--color-400);
    --primary-text: var(--color-100);
    --table-row-selected-bg: #dee2e6;
    --table-row-default-bg: var(--color-300);
    --table-row-selected-text: #ffffff;
    --search-bg: var(--color-300);
    --search-border: var(--color-300);
    --modal-bg: var(--color-400);
    --modal-text: var(--color-500);
    --navbar-bg: var(--color-400);
    --details-bg: var(--color-300);
    --details-title: var(--color-500);
    --details-grid: var(--color-200);
    --details-strong: var(--color-600);
    --details-strong-p: var(--details-title);
  }
`;
