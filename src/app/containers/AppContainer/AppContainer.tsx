import { SpinnerContainer } from '../SpinnerContainer';
import { Router } from '~/router';
import { DefaultLayout } from '~/ui/DefaultLayout';

export function AppContainer() {
  return (
    <>
      <SpinnerContainer />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </>
  );
}
