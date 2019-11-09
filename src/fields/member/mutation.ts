import { GraphQLNonNull, GraphQLList } from 'graphql';
import { createMember, updateMember, deleteMember } from '@/fields/member/resolvers';
import { memberType, memberCreateInput, memberUpdateInput, memberDeleteInput } from '@/fields/member/types';

export const memberMutation = {
  createMember: {
    type: new GraphQLList(memberType),
    args: {
      member: {
        type: new GraphQLNonNull(memberCreateInput)
      }
    },
    resolve: (_: any, args: any) => {
      return createMember(args.member);
    }
  },
  updateMember: {
    type: new GraphQLList(memberType),
    args: {
      member: {
        type: new GraphQLNonNull(memberUpdateInput)
      }
    },
    resolve: (_: any, args: any) => {
      return updateMember(args.member);
    }
  },
  deleteMember: {
    type: new GraphQLList(memberType),
    args: {
      member: {
        type: new GraphQLNonNull(memberDeleteInput)
      }
    },
    resolve: (_: any, args: any) => {
      return deleteMember(args.member);
    }
  }
};
