import { ICompany, ICompanyCreate } from '@/interfaces/company/company';
import { apiClient } from '@/services/api';

export const getAllCompaniesService = async () => {
  const response = await apiClient.get<ICompany[]>('/company');
  return response.data;
};

export const createCompanyService = async (company: ICompanyCreate) => {
  const response = await apiClient.post<ICompany>('/company', company);
  return response.data;
};

export const updateCompanyService = async (id: number, company: ICompanyCreate) => {
  const response = await apiClient.put<ICompany>(`/company/${id}`, company);
  return response.data;
};

export const deleteCompanyService = async (id: number) => {
  await apiClient.delete(`/company/${id}`);
};
