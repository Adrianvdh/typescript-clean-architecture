import { v4 } from 'uuid';
import { UserRole } from '@core/common/enums/UserEnums';
import { GetUserPreviewQueryResult } from '@core/common/cqers/query/queries/user/result/GetUserPreviewQueryResult';

describe('GetUserPreviewQueryResult', () => {

  describe('new', () => {
  
    test('Expect it creates GetUserPreviewQueryResult instance with required parameters', () => {
      const userId: string = v4();
      const userName: string = 'Jaskier';
      const userRole: UserRole = UserRole.AUTHOR;
      
      const getUserPreviewQueryResult: GetUserPreviewQueryResult = GetUserPreviewQueryResult.new(userId, userName, userRole);
      
      expect(getUserPreviewQueryResult.id).toBe(userId);
      expect(getUserPreviewQueryResult.name).toBe(userName);
      expect(getUserPreviewQueryResult.role).toBe(userRole);
    });
    
  });
  
});
