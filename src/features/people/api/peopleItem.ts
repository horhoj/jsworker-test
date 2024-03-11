import { PeopleItem } from '../types/PeopleItem';
import { memoize } from '~/utils/memoize';
import { axiosInstance } from '~/api/apiTransport';

const fetchPeopleItem = memoize(async (id: string) => {
  const res = await axiosInstance.request<PeopleItem>({
    url: `/people/${id}`,
    method: 'get',
  });

  return res.data;
});

export const peopleItemAPI = { fetchPeopleItem } as const;
