import {SetMetadata} from '@nestjs/common';
import  Role  from '../@core/domain/enum/role.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);