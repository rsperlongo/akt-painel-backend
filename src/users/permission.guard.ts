
import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import Permission from 'src/@core/domain/enum/permission.enum';
import RequestWithUser from 'src/auth/interfaces/requestWithUser.interface';
import JwtAuthenticationGuard from 'src/auth/jwt-authentication.guard';
 
const PermissionGuard = (permission: Permission): Type<CanActivate> => {
  class PermissionGuardMixin extends JwtAuthenticationGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);
 
      const request = context.switchToHttp().getRequest<RequestWithUser>();
      const user = request.user;
 
      return user?.permissions.includes(permission);
    }
  }
 
  return mixin(PermissionGuardMixin);
}
 
export default PermissionGuard;