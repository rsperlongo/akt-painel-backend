import { Request } from 'express';
import { User } from 'src/@core/domain/entities/user.entity';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;