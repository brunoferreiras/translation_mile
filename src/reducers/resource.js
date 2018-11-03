import * as types from '../actions/types';

const initialState = {
  resources: [
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'coordinate.unprocessedCoordinate',
        module_id: 'GreenMileCommons',
        value: 'Unprocessed coordinate',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'coordinate.unprocessedCoordinate',
        module_id: 'GreenMileCommons',
        value: 'Coordenada sin procesar',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'configuration.duplicateOrganization',
        module_id: 'GreenMileCommons',
        value: 'มีการตั้งค่าสำหรับองค์กรนี้อยู่แล้ว',
        language_id: 'th',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'configuration.duplicateOrganization',
        module_id: 'GreenMileCommons',
        value: 'Já existe configuração cadastrada para esta organização',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'configuration.duplicateOrganization',
        module_id: 'GreenMileCommons',
        value: 'すでにこの組織のコンフィグレーションが存在します',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'configuration.duplicateOrganization',
        module_id: 'GreenMileCommons',
        value: 'There is already a configuration for this organization',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'configuration.duplicateOrganization',
        module_id: 'GreenMileCommons',
        value: 'Ya existe una configuración para esta organización',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.missingConfiguration',
        module_id: 'GreenMileCommons',
        value: 'Missing message bus configuration',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.missingConfiguration',
        module_id: 'GreenMileCommons',
        value: 'Configuración faltante del message bus',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.missingConfiguration',
        module_id: 'GreenMileCommons',
        value: 'Configuração ausente do barramento de mensagens',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.connection.timeout',
        module_id: 'GreenMileCommons',
        value: 'Tempo limite de conexão de barramento de mensagens',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.connection.timeout',
        module_id: 'GreenMileCommons',
        value: 'Tiempo de espera de conexión de bus de mensaje',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.connection.timeout',
        module_id: 'GreenMileCommons',
        value: 'Message bus connection timeout',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.busMaintenance',
        module_id: 'GreenMileCommons',
        value: 'Mantenimiento de cola de mensajes',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.busMaintenance',
        module_id: 'GreenMileCommons',
        value: 'Manutenção de fila de mensagens',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'bus.busMaintenance',
        module_id: 'GreenMileCommons',
        value: 'Message bus under maintenance',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteWithoutEquipment',
        module_id: 'GreenMileCommons',
        value: 'ไม่มีอุปกรณ์ใดที่กำหนดให้กับจุดหยุดนี้',
        language_id: 'th',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteWithoutEquipment',
        module_id: 'GreenMileCommons',
        value: 'Parada sem equipamento',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteWithoutEquipment',
        module_id: 'GreenMileCommons',
        value: 'Ruta sin equipo',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteWithoutEquipment',
        module_id: 'GreenMileCommons',
        value: 'この停留所に割り当てられた設備はありません',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteWithoutEquipment',
        module_id: 'GreenMileCommons',
        value: 'No equipment assigned to this Stop',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteIsNotOnInterval',
        module_id: 'GreenMileCommons',
        value: 'ไม่มีการหยุดในช่วงเวลานี้',
        language_id: 'th',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteIsNotOnInterval',
        module_id: 'GreenMileCommons',
        value: 'Não há paradas neste intervalo',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteIsNotOnInterval',
        module_id: 'GreenMileCommons',
        value: 'この区間には停留所はありません',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteIsNotOnInterval',
        module_id: 'GreenMileCommons',
        value: 'No existen paradas en este intervalo',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.StopRouteIsNotOnInterval',
        module_id: 'GreenMileCommons',
        value: 'There are no Stops in this interval',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2018-06-23T10:37:49Z',
        updated_at: '2018-06-23T10:37:49Z',
        resource_id: 'AutoArriveReprocess.RouteNotFound',
        module_id: 'GreenMileCommons',
        value: 'Rota não encontrada',
        language_id: 'pt',
        user_modified: null
      }
    }
  ]
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_RESOURCES:
      return { ...state, resources: action.payload };
    default:
      return state;
  }
};

export default resourceReducer;
