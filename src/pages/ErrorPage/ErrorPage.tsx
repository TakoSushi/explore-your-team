import {
  ErrorResponse,
  isRouteErrorResponse,
  Link,
  useRouteError,
} from 'react-router-dom';

import styles from './styles/index.module.css';

type TError = {
  message: string;
  status: number;
  statusText: string;
};

function getErrorMessage(error: ErrorResponse): string {
  const messages: Record<number, string> = {
    404: "This page doesn't exist!",
    401: "You aren't authorized to see this!",
    503: 'Looks like our API is down!',
    418: "I'm a teapot!",
  };

  return messages[error.status];
}

function handleError(error: unknown): TError {
  const defaultError: TError = {
    message: 'Something went wrong!',
    status: 500,
    statusText: 'Internal Server Error',
  };

  if (isRouteErrorResponse(error)) {
    return {
      message: getErrorMessage(error),
      status: error.status,
      statusText: error.statusText,
    };
  }

  return defaultError;
}

export function ErrorPage() {
  const error = useRouteError();

  const handlingError = handleError(error);

  return (
    <main className={styles.errorPage}>
      <p>{handlingError.statusText}</p>
      <p className={styles.errorStatus}>{handlingError.status}</p>
      <p className={styles.errorMessage}>{handlingError.message}</p>
      <p className={styles.linkWrapper}>
        <Link to="/">Вернуться на главную страницу</Link>
      </p>
    </main>
  );
}
