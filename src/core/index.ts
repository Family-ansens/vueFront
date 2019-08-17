import Vue from 'vue';
import { ICommomUtil, commonUtil } from '@/utils/common-utils';
import requestService, { IRequest } from '@/utils/request';
import ValidateService, { IValidate } from '@/utils/validate';

Vue.prototype.$utils = {
    common: commonUtil,
    request: requestService,
    validate: ValidateService,
};

declare module 'vue/types/vue' {
    interface Vue {
        $utils: {
            common: ICommomUtil,
            request: IRequest,
            validate: IValidate,
        };
    }
}
