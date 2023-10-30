import CreateUserPermission from "../enum/createUserPermission.enum"; 
import DeleteUserPermission from "../enum/deleteUserPermission.enum";
import UpdateUserPermission from "../enum/updateUserPermission.enum";

const Permission = {
  ...CreateUserPermission,
  ...DeleteUserPermission,
  ...UpdateUserPermission
}
 
type Permission = CreateUserPermission | DeleteUserPermission;
 
export default Permission;