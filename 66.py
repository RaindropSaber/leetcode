class Solution(object):
    def plusOne(self,digits):
        for i in range(len(digits)-1,-1,-1):
            if(digits[i]==9):
                digits[i]=0
                if(i==0):
                    digits.insert(0,1)
            else:
                digits[i]+=1
                return digits
        return digits
A=Solution()
a=A.plusOne([9,9,9])
print(a)