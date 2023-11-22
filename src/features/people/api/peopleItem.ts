import { PeopleItem } from '../types/PeopleItem';
import { axiosInstance } from '~/api/apiTransport';

//Сделал локальный кэш, чисто из-за тормознутого АПИ
//Так как база только для чтения то в инвалидации кэша смысла нет
const localCache: Record<string, PeopleItem> = {};

const fetchPeopleItem = async (id: string) => {
  if (localCache[id]) {
    return localCache[id];
  }

  const res = await axiosInstance.request<PeopleItem>({
    url: `/people/${id}`,
    method: 'get',
  });

  // eslint-disable-next-line require-atomic-updates
  localCache[id] = res.data;
  console.log('peopleItemCache', localCache);

  return res.data;
};

export const peopleItemAPI = { fetchPeopleItem } as const;
