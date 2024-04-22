import { Tag } from 'primereact/tag';
import { Client } from '../../../types/client';

const statusBodyTemplate = (rowData: Client) => {

    const getSeverity = (client: Client) => {
        switch (client.status) {
          case 'Active':
            return 'success';
            
            case 'Pending':
              return 'warning';
              

            case 'Inactive':
                return 'danger';

            default:
                return null;
        }
    };
    return <Tag value={rowData.status} className={`p-tag p-component p-tag-${getSeverity(rowData)}`}></Tag>;
};
export default statusBodyTemplate