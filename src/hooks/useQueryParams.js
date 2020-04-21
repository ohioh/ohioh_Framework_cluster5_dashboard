import { useLocation, useHistory } from 'react-router-dom';

function changeParamKey(key) {
  switch (key) {
    case 'factoryUUID':
      return 'factory_uuid';
    case 'departmentUUID':
      return 'department_uuid';
    case 'positionUUID':
      return 'position_uuid';
    case 'connectType':
      return 'connect_type';
    case 'isInvited':
      return 'invited_at';
    case 'joinedKinship':
      return 'joined_at';
    case 'subscribedOn':
      return 'subscribed_on';
    case 'canOnboard':
      return 'can_onboard';
    // for issue filter
    case 'issueCategoryUUID':
      return 'category';
    case 'issueStatus':
      return 'status';
    case 'issueOverdue':
      return 'overdue';
    case 'issueClosed':
      return 'closed';
    case 'issueAnonymous':
      return 'anonymous';
    case 'submittedStartDate':
      return 'submitted_start_date';
    case 'submittedEndDate':
      return 'submitted_end_date';
    case 'resolvedStartDate':
      return 'resolved_start_date';
    case 'resolvedEndDate':
      return 'resolved_end_date';
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
