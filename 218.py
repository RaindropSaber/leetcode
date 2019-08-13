class Solution(object):
    def getSkyline(self, buildings):
        print(buildings)
        qqq={}
        for item in buildings:
            if item[2] not in qqq.keys():
                qqq[item[2]]=[]
            qqq[item[2]].append(item[:2])
        for i,v in qqq.items()[::-1]:
            print(v)
            # for j in v[::-1]:
                # print(j)
    # def www(self,a)
    #     heng=[]
    #     uu=[0,0]
    #     for item in a:
    #         if item[0]<uu[1] and item[0]>uu[0]:
    #             if item[1]>uu[1]:
    #                 uu[1]=item[1]
    #         else:
    #             if uu!=[0,0]:
    #                 heng.append(uu)
    #             uu=item[:2]
    #     heng.append(uu)
    #     print(heng)
A=Solution()
a=[[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
A.getSkyline(a)
# b=[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
2,10 ,9,10