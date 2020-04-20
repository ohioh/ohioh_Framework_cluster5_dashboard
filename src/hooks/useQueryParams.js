import { useLocation, useHistory } from 'react-router-dom';

function changeParamKey(key) {
  switch (key) {
    // case 'factoryUUID':
    //   return 'factory_uuid';
    // case 'departmentUUID':
    //   return 'department_uuid';
    // case 'positionUUID':
    //   return 'position_uuid';
    default:
      return key;
  }
}

export default function useQueryParams() {
  const location = useLocation();
  const history = useHistory();
  let queryParams = new URLSearchParams(location.search);

  /**
   * Convert filter values into URLSearchParams object
   * and append them to browser url
   *
   * @param {object} values Filter key and their value as constructed into one object
   */
  const handleQueryParams = (filterParams, isEmptySearchParam = false) => {
    if (isEmptySearchParam) {
      queryParams = new URLSearchParams();
    }

    for (const key in filterParams) {
      const paramKey = changeParamKey(key);
      queryParams.delete('page');
      if (filterParams[key] !== undefined) {
        if (filterParams[key] === '' || filterParams[key] === false) {
          queryParams.delete(paramKey);
        } else {
          queryParams.set(paramKey, filterParams[key]);
        }
      }
    }

    history.push(location.pathname + '?' + queryParams.toString());
  };

  /**
   * Clear all queryParams from the
   * browser url
   *
   */
  const clearAll = () => {
    history.push(location.pathname);
  };

  return { queryParams, handleQueryParams, clearAll };
}
