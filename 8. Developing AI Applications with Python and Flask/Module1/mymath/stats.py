def mean(nums):
    return sum(nums)/len(nums)

def median(nums):
    nums.sort()
    if len(nums) % 2 == 0:
        med1 = nums[len(nums)//2]
        med2 = nums[len(nums)//2-1]
        med = (med1+med2)/2
    else:
        med = nums[len(nums)//2]
    return med