import { FC, lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { PageLoader } from './components'
import { routes } from './constants/routes'

const MainPage = lazy(() => import('./components/pages/MainPage'))

export const Router: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route index element={<MainPage />} />

        {routes.map(({ name, Component }) => (
          <Route key={name} path={name} element={<Component />} />
        ))}

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  )
}
