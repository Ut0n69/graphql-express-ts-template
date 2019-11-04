import { GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';
import { getMemberList, getMemberById } from '@/fields/member/resolvers';
import { memberType } from '@/fields/member/types';

export const memberQuery = {
  memberList: {
    type: new GraphQLList(memberType),
    resolve: getMemberList
  },
  member: {
    type: memberType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The Member ID.'
      }
    },
    resolve: (_: any, args: any) => {
      return getMemberById(Number(args.id));
    }
  }
};
