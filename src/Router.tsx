import { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { PageLoader } from './components'
import { routes } from './constants/routes'

const Component = lazy(() => import('./components/test/Component'))

export const Router: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index element={<Component />} />

        {routes.map(({ name, Component }) => (
          <Route key={name} path={name} element={<Component />} />
        ))}

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  )
}
