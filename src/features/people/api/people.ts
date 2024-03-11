import { ListResponse } from '../types/common';
import {
  ListOfPeopleItem,
  ListOfPeopleItemWithoutId,
} from '../types/ListOfPeopleItem';
import { memoize } from '~/utils/memoize';
import { axiosInstance } from '~/api/apiTransport';

const dataMapper = (
  data: ListResponse<ListOfPeopleItemWithoutId>,
): ListResponse<ListOfPeopleItem> => {
  const results = data.results.map((item) => {
    //ид получаем из URL персонажа, так как этого ИД в данных нет
    const id = item.url.split('/')[5];
    return { ...item, id };
  });
  return { ...data, results };
};

const fetchListOfPeople = memoize(async (page?: number, search?: string) => {
  const res = await axiosInstance.request<
    ListResponse<ListOfPeopleItemWithoutId>
  >({
    url: '/people',
    params: { page, search },
  });

  const data = dataMapper(res.data);

  return data;
});

export const peopleAPI = { fetchListOfPeople } as const;
