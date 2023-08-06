import { prisma } from "../../prisma/client.ts";
import { AnnouncementInput, ToolInput, ToolUsageUpdateInput, 
         DisposableMaterialInput, MachineInput, MaterialInput, 
         MaterialUsageUpdateInput, UserMaterialInput, ThreeDPInput, 
         UserInput } from "../types/types.ts";

const Mutation = {

    // Announcement Mutation 
    AddAnnouncement: async (_parents, args: { announcementInput: AnnouncementInput }, context) => {
        const { title, content } = args.announcementInput;
        const date = new Date().toUTCString();
        const newAnnouncement = await prisma.announcement.create({
            data: {
                title: title,
                date: date,
                content: content
            }
        });
        // console.log(newAnnouncement);
        return newAnnouncement;
    },
    DeleteAnnouncement: async(_parents, args: { id: number }, context) => {
        const id = args.id;
        const findAnnouncement = await prisma.announcement.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findAnnouncement) { 
            throw new Error("announcement not found!");
        }

        const daleteAnnouncement = await prisma.announcement.delete({
            where: {
                id: id
            }
        });
        return daleteAnnouncement;
    },
    EditAnnouncement: async(_parents, args: { id: number, announcementInput: AnnouncementInput }, context) => {
        const id = args.id;
        const { title, content } = args.announcementInput;
        const findAnnouncement = await prisma.announcement.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findAnnouncement) { 
            throw new Error("announcement not found!");
        }

        const editAnnouncement = await prisma.announcement.update({
            where: {
                id: id
            },
            data: {
                title: title,
                content: content
            }
        });
        return editAnnouncement;
    },

    // Tool Mutation
    AddTool: async (_parents, args: { toolInput: ToolInput }, context) => {
        const { name, partName, category, position, description, photoLink, usage, tutorialLink, remain } = args.toolInput;
        const newTool = await prisma.tool.create({
            data: {
                name: name,
                partName: partName,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                remain: remain
            }
        });
        // console.log(newTool);
        return newTool;
    },
    DeleteTool: async(_parents, args: { id: number }, context) => {
        const id = args.id;
        const findTool = await prisma.tool.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findTool) { 
            throw new Error("tool not found!");
        }

        const deleteTool = await prisma.tool.delete({
            where: {
                id: id
            }
        });
        return deleteTool;
    },
    EditTool: async(_parents, args: { id: number, toolInput: ToolInput }, context) => {
        const id = args.id;
        const { name, partName, category, position, description, photoLink, usage, tutorialLink, remain } = args.toolInput;
        const findTool = await prisma.tool.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findTool) { 
            throw new Error("tool not found!");
        }

        const editTool = await prisma.tool.update({
            where: {
                id: id
            },
            data: {
                name: name,
                partName: partName,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                remain: remain
            }
        });
        return editTool;
    },
    ToolUsageUpdate: async(_parents, args: { id: number, toolUsageUpdateInput: ToolUsageUpdateInput }, context) => {
        const id = args.id;
        const { usage, remain } = args.toolUsageUpdateInput;
        const findTool = await prisma.tool.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findTool) { 
            throw new Error("tool not found!");
        }

        const toolUsageUpdate = await prisma.tool.update({
            where: {
                id: id
            },
            data: {
                usage: usage,
                remain: remain
            }
        });
        return toolUsageUpdate;
    },

    // DisposableMaterial Mutation
    AddDisposableMaterial: async (_parents, args: { disposableMaterialInput: DisposableMaterialInput }, context) => {
        const { name, partName, category, position, description, photoLink, usage, tutorialLink, fee, remain } = args.disposableMaterialInput;
        const newDisposableMaterial = await prisma.disposableMaterial.create({
            data: {
                name: name,
                partName: partName,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                fee: fee,
                remain: remain
            }
        });
        return newDisposableMaterial;
    },

    // Machine Mutation
    AddMachine: async (_parents, args: { machineInput: MachineInput }, content) => {
        const { name, partName, category, position, description, photoLink, usage, tutorialLink } = args.machineInput;
        const newMachine = await prisma.machine.create({
            data: {
                name: name,
                partName: partName,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink
            }
        });
        // console.log(newMachine);
        return newMachine;
    },

    // Material Mutation
    AddMaterial: async(_parents, args: {materialInput: MaterialInput}, context) => {
        const { name, partName, category, valuable, position, description, photoLink, usage, tutorialLink, fee, remain } = args.materialInput;
        const newMaterial = await prisma.material.create({
            data: {
                name: name,
                partName: partName,
                category: category,
                valuable: valuable,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                fee: fee,
                remain: remain
            }
        });
        return newMaterial;
    },
    DeleteMaterial: async(_parents, args: { id: number }, context) => {
        const id = args.id;
        const findMaterial = await prisma.material.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findMaterial) { 
            throw new Error("material not found!");
        }

        const deleteMaterial = await prisma.material.delete({
            where: {
                id: id
            }
        });
        return deleteMaterial;
    },
    EditMaterial: async(_parents, args: { id: number, materialInput: MaterialInput }, context) => {
        const id = args.id;
        const { name, partName, category, valuable, position, description, photoLink, usage, tutorialLink, fee, remain } = args.materialInput;
        const findMaterial = await prisma.material.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findMaterial) { 
            throw new Error("material not found!");
        }

        const editMaterial = await prisma.material.update({
            where: {
                id: id
            },
            data: {
                name: name,
                partName: partName,
                category: category,
                valuable: valuable,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                fee: fee,
                remain: remain
            }
        });
        return editMaterial;
    },
    MaterialUsageUpdate: async(_parents, args: { id: number, materialUsageUpdateInput: MaterialUsageUpdateInput }, context) => {
        const id = args.id;
        const { usage, remain } = args.materialUsageUpdateInput;
        const findMaterial = await prisma.material.findFirst({
            where: { 
                id: id 
            }
        });
        if (!findMaterial) { 
            throw new Error("material not found!");
        }

        const materialUsageUpdate = await prisma.material.update({
            where: {
                id: id
            },
            data: {
                usage: usage,
                remain: remain
            }
        });
        return materialUsageUpdate;
    },

    AddThreeDP: async(_parents, args: {threeDPInput: ThreeDPInput}, context) => {
        const { name, category, position, description, photoLink, usage, tutorialLink, broken } = args.threeDPInput;
        const newThreeDP = await prisma.threeDP.create({
            data: {
                name: name,
                category: category,
                position: position,
                description: description,
                photoLink: photoLink,
                usage: usage,
                tutorialLink: tutorialLink,
                broken: broken
            }
        });
        return newThreeDP;
    },

    DeleteThreeDP: async(_parents, args: {id: number}, context) => {
      const id = args.id;
      const findThreeDP = await prisma.threeDP.findFirst({
        where: {
            id: id
        }
      });

      const findAffiliatedUser = await prisma.user.findMany({   // checks if any user is linked to this threeDP instead of checking if the waiting line is empty is to minimize and simplify input variables
        where: {
            threeDPId: id
        }
      });

      if (!findThreeDP){
        throw new Error("ThreeDP Not Found");
      }
      if (findAffiliatedUser[0] !== undefined) {
        throw new Error("There are still people waiting in line");
      }
      // When editing User's threeDPId, backend must also manipulate the waiting line of the corresponding threeDP (removing/adding user from/to the line)

    const DeleteThreeDP = await prisma.threeDP.delete({
        where: {
            id: id
        }
    });

    return DeleteThreeDP

    },
    AddUserMaterial: async(_parents, args: {userMaterialInput: UserMaterialInput}, context) => {
        const { name, partName, borrowerId, borrowNum, status} = args.userMaterialInput;

        const findBorrower = await prisma.user.findFirst({
            where: {
                id: borrowerId
            }
        })

        if (!findBorrower){
            throw new Error("Borrower ID not found!");
        } 

        const borrowDate = new Date().toUTCString();
        const newUserMaterial = await prisma.userMaterial.create({
            data: {
                name: name,
                partName: partName,
                borrowerId: borrowerId,
                borrowNum: borrowNum,
                borrowDate: borrowDate,
                returnDate: null,
                status: status
            }
        });

        const updateBorrowHistory = await prisma.user.update({
            where: {
                id: borrowerId
            },
            data:{
                borrowHistoryId: { push: newUserMaterial.id } 
            }
        });

        return newUserMaterial;
    },
    DeleteUserMaterial: async(_parents, args: {id: number}, context) => {
        const id = args.id;
        const findUserMaterial = await prisma.userMaterial.findFirst({
            where: {
                id: id
            }
        });
        if (!findUserMaterial) {
            throw new Error("User Material Not Found");
        } else if (findUserMaterial.borrowerId !== null) {
            throw new Error("This Material Is Lent") 
        } else {
            const DeleteUserMaterial = await prisma.userMaterial.delete({
                where: {
                    id: id
                }
            });
            return DeleteUserMaterial;
        }   // Edit userMaterial has to set the borrowerId of the specified material and remove it from materials then add it to userMaterials or vice versa.
    },
    AddUser: async(_parents, args: {userInput: UserInput}, context) => {
        const {name, studentID, password, photoLink, threeDPId, laserCutAvailable } = args.userInput;
        if (threeDPId){
            const findThreeDP = await prisma.threeDP.findFirst({
                where: {
                    id: threeDPId
                }
            })

            if (!findThreeDP){
                throw new Error("threeDP ID not found!");
            } 
        }

        const newUsers = await prisma.user.create({
            data:{
                name: name,
                studentID: studentID,
                password: password,
                photoLink: photoLink,
                threeDPId: threeDPId,
                laserCutAvailable: laserCutAvailable,
                borrowHistory: {}
            }
        });
        // console.log(newUsers);

        if (threeDPId){
            const updateWaiting = await prisma.threeDP.update({
                where: {
                    id: threeDPId
                },
                data:{
                    waitingId: { push: newUsers.id } 
                }
            });
        }

        return newUsers;
    },
    DeleteUser: async(_parents, args: {id: number}, context) => {
        const id = args.id;
        const findUser = await prisma.user.findFirst({
          where: {
              id: id
          }
        });
  
        const findNotReturnedMaterials= await prisma.userMaterial.findMany({ // checks if any userMaterial is linked to this user instead of checking if the borrowHistory is empty is to minimize and simplify input variables
          where: {
              borrowerId: id
          }
        });
        if (!findUser){
          throw new Error(`User With id: ${id} Not Found`)
        } else if (findNotReturnedMaterials[0] !== undefined){
          throw new Error("There are materials yet to be returned by this user");
        }
    /*   const deleteLentMaterials = await prisma.userMaterial.deleteMany({
    //       where: {
    //           borrowerId: id
    //       }
       }); */   // Code for force deletion of materials borrowed by this user
      const DeleteUser = await prisma.user.delete({
          where: {
              id: id
          }
      });
      return DeleteUser
  
      },
}

export { Mutation }