import CreateDocument from '@/components/pages/CreateDocument'
import Documents from '@/components/pages/Documents'

export enum RoutesNames {
  CreateDocument = 'CreateDocument',
  Documents = 'Documents',
}

export const routes = [
  { name: RoutesNames.CreateDocument, Component: CreateDocument },
  { name: RoutesNames.Documents, Component: Documents },
]
