import request from './request';

export const getResources = () => {
  return request.get('get_resources_since');
};

export const getResourcesTest = () => {
  return [
    {
      resource: {
        created_at: '2011-05-12T20:09:39Z',
        updated_at: '2011-05-12T20:09:39Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'JME',
        value:
          'There are still % events on queue. Do you really wish to reload the route?',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-02-09T22:11:08Z',
        updated_at: '2012-02-09T22:11:08Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'JME',
        value:
          'Todavía hay eventos% pendientes. ¿Realmente desea volver a cargar la ruta?',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-07T05:14:02Z',
        updated_at: '2011-11-07T11:44:50Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'JME',
        value:
          'キュー上の % のイベントが残っています. ルートをリロードしますか?',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-05-12T20:09:39Z',
        updated_at: '2011-05-12T20:09:39Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'JME',
        value:
          'Ainda há %s evento(s) na fila a serem enviados. Deseja realmente recarregar a rota?',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:34:50Z',
        updated_at: '2014-01-14T15:55:43Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'DEPOT',
        value: 'Location Description',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:34:50Z',
        updated_at: '2012-06-05T21:34:50Z',
        resource_id: 'Filter.Stop.Location.Description',
        module_id: 'DEPOT',
        value: 'Acessórios marcados com * precisam ser preenchidos',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:09Z',
        updated_at: '2012-06-05T21:35:09Z',
        resource_id: 'AccessoryCheckForm.Back',
        module_id: 'DEPOT',
        value: 'Back',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-08-02T19:30:34Z',
        updated_at: '2012-08-02T19:30:34Z',
        resource_id: 'AccessoryCheckForm.Back',
        module_id: 'DEPOT',
        value: 'Regreso',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:09Z',
        updated_at: '2012-06-05T21:35:09Z',
        resource_id: 'AccessoryCheckForm.Back',
        module_id: 'DEPOT',
        value: 'Voltar',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:36Z',
        updated_at: '2012-06-05T21:35:36Z',
        resource_id: 'AccessoryCheckForm.ErrorSendingAccessories',
        module_id: 'DEPOT',
        value: 'Error sending accessories',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:36Z',
        updated_at: '2012-06-05T21:35:36Z',
        resource_id: 'AccessoryCheckForm.ErrorSendingAccessories',
        module_id: 'DEPOT',
        value: 'Erro ao enviar os acessórios',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:36:03Z',
        updated_at: '2012-06-05T21:36:03Z',
        resource_id: 'AccessoryCheckForm.Save',
        module_id: 'DEPOT',
        value: 'Send',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:36:03Z',
        updated_at: '2012-06-05T21:36:03Z',
        resource_id: 'AccessoryCheckForm.Save',
        module_id: 'DEPOT',
        value: 'Enviar',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:16Z',
        updated_at: '2012-06-05T21:35:16Z',
        resource_id: 'AccessoryCheckForm.SendAccessoriesForcedQuestion',
        module_id: 'DEPOT',
        value: 'Divergence found, send anyway?',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:16Z',
        updated_at: '2012-06-05T21:35:16Z',
        resource_id: 'AccessoryCheckForm.SendAccessoriesForcedQuestion',
        module_id: 'DEPOT',
        value: 'Divergências encontradas, deseja enviar mesmo assim?',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:24Z',
        updated_at: '2012-06-05T21:35:24Z',
        resource_id: 'AccessoryCheckForm.SendAccessoriesQuestion',
        module_id: 'DEPOT',
        value: 'Do you want to send accessory check out?',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:24Z',
        updated_at: '2012-06-05T21:35:24Z',
        resource_id: 'AccessoryCheckForm.SendAccessoriesQuestion',
        module_id: 'DEPOT',
        value: 'Deseja enviar a conferência de acessórios?',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:08Z',
        updated_at: '2012-06-05T21:35:08Z',
        resource_id: 'AccessoryCheckForm.SendAccessoriesTitle',
        module_id: 'DEPOT',
        value: 'Accessory check out',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-08-02T19:30:12Z',
        updated_at: '2012-08-02T19:30:12Z',
        resource_id: 'AccessoryCheckForm.SendAccessoriesTitle',
        module_id: 'DEPOT',
        value: 'Check Out de Accesorio',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:08Z',
        updated_at: '2012-06-05T21:35:08Z',
        resource_id: 'AccessoryCheckForm.SendAccessoriesTitle',
        module_id: 'DEPOT',
        value: 'Conferência de acessórios',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:36:16Z',
        updated_at: '2015-08-18T18:36:26Z',
        resource_id: 'AccessoryCheckForm.wrongAccessoryConference',
        module_id: 'DEPOT',
        value: 'Wrong accessory check out',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:36:16Z',
        updated_at: '2012-06-05T21:36:16Z',
        resource_id: 'AccessoryCheckForm.wrongAccessoryConference',
        module_id: 'DEPOT',
        value: 'Conferência de acessórios incorreta',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:33Z',
        updated_at: '2012-06-05T21:35:33Z',
        resource_id: 'AccessoryCheckManager.ErrorRegisteringAccessories',
        module_id: 'DEPOT',
        value: 'Error registering accessories',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:33Z',
        updated_at: '2012-06-05T21:35:33Z',
        resource_id: 'AccessoryCheckManager.ErrorRegisteringAccessories',
        module_id: 'DEPOT',
        value: 'Erro ao registrar acessórios',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:27Z',
        updated_at: '2012-06-05T21:35:27Z',
        resource_id: 'AccessoryCheckManager.ErrorRetrievingAccessoryCheckList',
        module_id: 'DEPOT',
        value: 'Error listing accessories',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-06-05T21:35:27Z',
        updated_at: '2012-06-05T21:35:27Z',
        resource_id: 'AccessoryCheckManager.ErrorRetrievingAccessoryCheckList',
        module_id: 'DEPOT',
        value: 'Erro listando os acessórios',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACCOUNT_TYPE_DESCRIPTION',
        module_id: 'central',
        value: 'Typ účtu',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACCOUNT_TYPE_DESCRIPTION',
        module_id: 'central',
        value: 'Account type',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACCOUNT_TYPE_DESCRIPTION',
        module_id: 'central',
        value: 'Tipo de cuenta',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACCOUNT_TYPE_DESCRIPTION',
        module_id: 'central',
        value: 'סוג חשבון',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-18T07:29:13Z',
        updated_at: '2011-11-18T07:29:13Z',
        resource_id: 'ACCOUNT_TYPE_DESCRIPTION',
        module_id: 'central',
        value: '顧客タイプ',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACCOUNT_TYPE_DESCRIPTION',
        module_id: 'central',
        value: 'Tipo de conta',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-10-10T08:57:28Z',
        updated_at: '2010-10-10T08:57:28Z',
        resource_id: 'ACCOUNT_TYPE_DESCRIPTION',
        module_id: 'central',
        value: 'Тип счета',
        language_id: 'ru',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'accountType',
        module_id: 'central',
        value: 'Typ účtu',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'accountType',
        module_id: 'central',
        value: 'Account type',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'accountType',
        module_id: 'central',
        value: 'Tipo de cuenta',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'accountType',
        module_id: 'central',
        value: 'סוג חשבון',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-18T07:29:05Z',
        updated_at: '2011-11-18T07:29:05Z',
        resource_id: 'accountType',
        module_id: 'central',
        value: '顧客タイプ',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'accountType',
        module_id: 'central',
        value: 'Tipo da conta',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-10-10T08:57:13Z',
        updated_at: '2010-10-10T08:57:13Z',
        resource_id: 'accountType',
        module_id: 'central',
        value: 'Тип счета',
        language_id: 'ru',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-05T13:28:40Z',
        updated_at: '2011-07-05T13:28:40Z',
        resource_id: 'ActionChoice.NoSelectedRow',
        module_id: 'JME',
        value: 'Select an action to complete:',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-02-09T17:32:33Z',
        updated_at: '2012-02-09T17:32:33Z',
        resource_id: 'ActionChoice.NoSelectedRow',
        module_id: 'JME',
        value: 'Seleccione una acción para terminar:',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-28T12:17:37Z',
        updated_at: '2011-07-28T12:17:37Z',
        resource_id: 'ActionChoice.NoSelectedRow',
        module_id: 'JME',
        value: 'בחר פעולה לסיים:',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-07T05:45:39Z',
        updated_at: '2011-11-07T08:09:43Z',
        resource_id: 'ActionChoice.NoSelectedRow',
        module_id: 'JME',
        value: '完了アクション選択:',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-05T13:28:40Z',
        updated_at: '2011-07-05T13:28:40Z',
        resource_id: 'ActionChoice.NoSelectedRow',
        module_id: 'JME',
        value: 'Selecione uma ação a ser realizada:',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-05T13:28:44Z',
        updated_at: '2011-07-05T13:28:44Z',
        resource_id: 'ActionChoice.requiredActions',
        module_id: 'JME',
        value: "It's necessary to complete the following actions:",
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-12-13T13:45:46Z',
        updated_at: '2011-12-13T13:45:46Z',
        resource_id: 'ActionChoice.requiredActions',
        module_id: 'JME',
        value: 'Es necesario completar las siguientes acciones:',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-28T12:07:51Z',
        updated_at: '2011-07-28T12:07:51Z',
        resource_id: 'ActionChoice.requiredActions',
        module_id: 'JME',
        value: 'זה הכרחי לסיים את הפעולות הבאות:',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-07T12:14:05Z',
        updated_at: '2011-11-07T12:14:05Z',
        resource_id: 'ActionChoice.requiredActions',
        module_id: 'JME',
        value: '次の操作を終えるために必要です:',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-05T13:28:44Z',
        updated_at: '2011-07-05T19:11:28Z',
        resource_id: 'ActionChoice.requiredActions',
        module_id: 'JME',
        value: 'É necessário finalizar as seguintes ações:',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-05T13:25:08Z',
        updated_at: '2011-07-05T13:25:08Z',
        resource_id: 'ActionChoiceForm.title',
        module_id: 'JME',
        value: 'Required actions',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-02-09T17:34:47Z',
        updated_at: '2012-02-09T17:34:47Z',
        resource_id: 'ActionChoiceForm.title',
        module_id: 'JME',
        value: 'Medidas necesarias',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-28T12:17:35Z',
        updated_at: '2011-07-28T12:17:35Z',
        resource_id: 'ActionChoiceForm.title',
        module_id: 'JME',
        value: 'פעולות נדרשות',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-07T10:38:02Z',
        updated_at: '2011-11-07T10:38:02Z',
        resource_id: 'ActionChoiceForm.title',
        module_id: 'JME',
        value: '必要なアクション',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-07-05T13:25:08Z',
        updated_at: '2011-07-05T13:25:08Z',
        resource_id: 'ActionChoiceForm.title',
        module_id: 'JME',
        value: 'Ações obrigatórias',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_AVG_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Průměrná délka trasy (minuty)',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_AVG_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Route avarege in minutes',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_AVG_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Promedio de ruta en minutos',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_AVG_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'משך מסלול ממוצע בדקות',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-18T07:16:05Z',
        updated_at: '2011-11-24T07:55:09Z',
        resource_id: 'ACTUAL_AVG_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'ルート平均時間(分)',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_AVG_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Média da rota em minutos',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-10-19T11:54:30Z',
        updated_at: '2010-10-19T11:54:30Z',
        resource_id: 'ACTUAL_P_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Plánovaný čas trasy',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_P_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Route planned time',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_P_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Tiempo planeado de la ruta',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_P_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'זמן משוער לסיום מסלול',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-18T07:09:31Z',
        updated_at: '2011-11-18T07:09:31Z',
        resource_id: 'ACTUAL_P_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'ルート予定時間',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'ACTUAL_P_ROUTE_TIME_MINUTES',
        module_id: 'central',
        value: 'Tempo planejado da rota',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-10-18T08:49:51Z',
        updated_at: '2010-10-18T08:49:51Z',
        resource_id: 'ActualArrival',
        module_id: 'JME',
        value: 'Skutečný příjezd',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-08-23T20:15:12Z',
        updated_at: '2010-08-23T20:15:12Z',
        resource_id: 'ActualArrival',
        module_id: 'JME',
        value: 'Actual arrival ',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-03-29T00:59:25Z',
        updated_at: '2011-03-29T00:59:25Z',
        resource_id: 'ActualArrival',
        module_id: 'JME',
        value: 'Llegada real',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-08-26T09:04:21Z',
        updated_at: '2010-08-26T09:04:21Z',
        resource_id: 'ActualArrival',
        module_id: 'JME',
        value: 'הגעה ממשית',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-06T01:27:31Z',
        updated_at: '2011-11-24T09:29:42Z',
        resource_id: 'ActualArrival',
        module_id: 'JME',
        value: '実到着',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-08-24T15:55:04Z',
        updated_at: '2010-08-24T15:55:04Z',
        resource_id: 'ActualArrival',
        module_id: 'JME',
        value: 'Chegada real',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-10-10T09:04:02Z',
        updated_at: '2010-10-10T09:23:52Z',
        resource_id: 'ActualArrival',
        module_id: 'JME',
        value: 'Действительное прибытие',
        language_id: 'ru',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-01-03T12:58:52Z',
        updated_at: '2011-01-03T12:58:52Z',
        resource_id: 'actualComplete',
        module_id: 'central',
        value: 'Skutečný čas dokončení',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-12-21T15:13:48Z',
        updated_at: '2010-12-21T15:13:48Z',
        resource_id: 'actualComplete',
        module_id: 'central',
        value: 'Actual complete time',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-03-29T00:59:56Z',
        updated_at: '2011-03-29T00:59:56Z',
        resource_id: 'actualComplete',
        module_id: 'central',
        value: 'Tiempo completo real',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-18T07:34:00Z',
        updated_at: '2011-11-18T07:34:00Z',
        resource_id: 'actualComplete',
        module_id: 'central',
        value: '実完了時間',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-12-21T15:13:49Z',
        updated_at: '2010-12-21T15:13:49Z',
        resource_id: 'actualComplete',
        module_id: 'central',
        value: 'Horário real de conclusão',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-01-03T13:50:59Z',
        updated_at: '2011-01-03T13:50:59Z',
        resource_id: 'actualStart',
        module_id: 'central',
        value: 'Zahájení trasy',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-12-21T15:36:22Z',
        updated_at: '2010-12-21T15:36:22Z',
        resource_id: 'actualStart',
        module_id: 'central',
        value: 'Route start',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2012-02-08T23:41:02Z',
        updated_at: '2012-02-08T23:41:02Z',
        resource_id: 'actualStart',
        module_id: 'central',
        value: 'Comienzo de Ruta',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-18T07:08:46Z',
        updated_at: '2011-11-18T07:08:46Z',
        resource_id: 'actualStart',
        module_id: 'central',
        value: 'ルート開始',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2010-12-21T15:36:22Z',
        updated_at: '2010-12-21T15:36:22Z',
        resource_id: 'actualStart',
        module_id: 'central',
        value: 'Inicio de rota',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'AddLocationForm.accountType',
        module_id: 'JME',
        value: 'Typ účtu',
        language_id: 'cs',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'AddLocationForm.accountType',
        module_id: 'JME',
        value: 'Account type',
        language_id: 'en',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'AddLocationForm.accountType',
        module_id: 'JME',
        value: 'Tipo de Cuenta',
        language_id: 'es',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'AddLocationForm.accountType',
        module_id: 'JME',
        value: 'סוג חשבון',
        language_id: 'hw',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: '2011-11-06T01:26:43Z',
        updated_at: '2011-11-06T01:26:43Z',
        resource_id: 'AddLocationForm.accountType',
        module_id: 'JME',
        value: '顧客タイプ',
        language_id: 'ja',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'AddLocationForm.accountType',
        module_id: 'JME',
        value: 'Tipo da conta',
        language_id: 'pt',
        user_modified: null
      }
    },
    {
      resource: {
        created_at: null,
        updated_at: '2010-07-06T07:00:00Z',
        resource_id: 'AddLocationForm.accountType',
        module_id: 'JME',
        value: 'Tip Cont',
        language_id: 'ro',
        user_modified: null
      }
    }
  ];
};
