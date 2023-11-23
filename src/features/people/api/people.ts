import { ListResponse } from '../types/common';
import {
  ListOfPeopleItem,
  ListOfPeopleItemWithoutId,
} from '../types/ListOfPeopleItem';
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

//Сделал локальный кэш, чисто из-за тормознутого АПИ
//Так как база только для чтения то в инвалидации кэша смысла нет
const getHash = (page?: number, search?: string) => `${search}_${page}`;
const localCache: Record<string, ListResponse<ListOfPeopleItemWithoutId>> = {};

const fetchListOfPeople = async (page?: number, search?: string) => {
  const currentHash = getHash(page, search);

  if (localCache[currentHash]) {
    return localCache[currentHash];
  }

  const res = await axiosInstance.request<
    ListResponse<ListOfPeopleItemWithoutId>
  >({
    url: '/people',
    params: { page, search },
  });

  const data = dataMapper(res.data);

  // eslint-disable-next-line require-atomic-updates
  localCache[currentHash] = data;
  // console.log('peopleCache', localCache);

  return data;
};

export const peopleAPI = { fetchListOfPeople } as const;
