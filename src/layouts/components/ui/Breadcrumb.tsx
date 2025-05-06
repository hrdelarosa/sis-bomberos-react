import { Link, useLocation } from 'react-router-dom'
import { pathsAside } from '../../../modules/core/constants/pathsAside'

interface RouteItem {
  title: string
  to?: string
  icon?: React.ComponentType
  items?: Record<string, RouteItem>
}

interface RouteSection {
  title?: string
  [key: string]: RouteItem | string | undefined
}

export default function Breadcrumb() {
  const location = useLocation()
  const paths = location.pathname.split('/').filter(Boolean)

  const findRouteByPath = (path: string): RouteItem | null => {
    const searchInObject = (
      obj: Record<string, RouteItem>
    ): RouteItem | null => {
      for (const key in obj) {
        if (obj[key]) {
          if (obj[key].to === path) {
            return obj[key]
          }
          if (obj[key].items) {
            const result = searchInObject(
              obj[key].items as Record<string, RouteItem>
            )
            if (result) return result
          }
        }
      }
      return null
    }

    const filterRouteItems = (obj: RouteSection): Record<string, RouteItem> => {
      const result: Record<string, RouteItem> = {}
      Object.keys(obj).forEach((key) => {
        if (key !== 'title' && typeof obj[key] === 'object') {
          result[key] = obj[key] as RouteItem
        }
      })
      return result
    }

    return searchInObject({
      ...filterRouteItems(pathsAside.menu),
      ...filterRouteItems(pathsAside.support),
    })
  }

  const getBreadcrumbItems = () => {
    const items = [{ title: 'Inicio', path: '/' }]
    let currentPath = ''

    paths.forEach((path, index) => {
      currentPath += `/${path}`
      const route = findRouteByPath(currentPath)
      if (route) {
        items.push({ title: route.title, path: currentPath })
      } else if (path.match(/^\d+$/) && paths[index - 1] === 'services') {
        // Añadir el ID del servicio al breadcrumb
        items.push({ title: `Servicio ${path}`, path: currentPath })
      }
    })

    return items
  }

  const items = getBreadcrumbItems()

  return (
    <nav className="text-sm font-semibold text-gray-600">
      {items.map((item, index) => (
        <span key={item.path}>
          {index < items.length - 1 ? (
            <>
              <Link
                to={item.path}
                className="hover:text-primary-red transition-colors"
              >
                {item.title}
              </Link>
              <span className="mx-2">/</span>
            </>
          ) : (
            <span className="font-semibold">{item.title}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
