import { useEffect } from 'react';
import { SpinnerContainer } from '../SpinnerContainer';
import { Router } from '~/router';
import { DefaultLayout } from '~/ui/DefaultLayout';
import { useAppSelector } from '~/store/hooks';
import { peopleErrorSelector } from '~/features/people/store/peopleSlice';

export function AppContainer() {
  const isApiError = useAppSelector(peopleErrorSelector);

  useEffect(() => {
    if (isApiError) {
      alert('Ошибка взаимодействия с сервером АПИ');
    }
  }, [isApiError]);

  return (
    <>
      <SpinnerContainer />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </>
  );
}
