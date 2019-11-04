import { memberList } from '@/data';

export const getMemberById = (id: number) =>
  new Promise(resolve => {
    const [member] = memberList.filter(member => {
      return member.id === id;
    });
    resolve(member);
  });

export const getMemberList = () => Promise.resolve(memberList);

export const createMember = ({ name, age }: { name: string; age: number }) => {
  const member = {
    id: memberList.length + 1,
    name,
    age
  };
  memberList.push(member);
  return memberList;
};

export const updateMember = ({ id, name, age }: { id: number; name: string; age: number }) => {
  memberList.forEach((member, index) => {
    if (id === member.id) {
      memberList[index] = {
        id,
        name,
        age
      };
    }
  });

  return memberList;
};

export const deleteMember = ({ id }: { id: number }) => {
  memberList.forEach((member, index) => {
    if (id === member.id) {
      memberList.splice(index, 1);
    }
  });

  return memberList;
};
