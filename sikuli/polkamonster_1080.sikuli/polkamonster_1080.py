import os  #导入os包  
print "測試" 

nextCount = 0
noFightCount = 0

while True:
    timeArea = Region(58,786,394,65)
    isTimeArea = timeArea.exists(Pattern("1629013105493.png").similar(0.97), 5)
    if isTimeArea is None:
        print('沒 Next Time! 開始打架!')
    
        sixtyMonsterArea =Region(516,880,236,52)
        isSixtyMonsterArea = sixtyMonsterArea.exists(Pattern("1629013141015.png").similar(0.98), 5)
        if isSixtyMonsterArea is None:
            print('沒找到 Fight 按鈕')

            noFightCount += 1
            print(noFightCount)
            if(noFightCount % 2) == 0:
                type(Key.F5) 
                wait(5)
            
        else:
            print('找到 Fight 開始打架!')
            isSixtyMonsterArea.highlight(2)
            isSixtyMonsterArea.click("1629013141015.png")
            
            metaArea = Region(731,516,348,85)
            isMetaArea = metaArea.exists(Pattern("1629013168898.png").similar(0.98), 5)
            if isMetaArea is None:
                print('沒找到 meta按鈕!')

                noFightCount += 1
                print(noFightCount)
                if(noFightCount % 2) == 0:
                    type(Key.F5) 
                    wait(5)

            else:
                print('找到meta, 點擊!')
                isMetaArea.highlight(2)
                isMetaArea.click("1629013168898.png")
                wait(30)
                type(Key.F5)
                wait(5)
    
    else:
        print('找到 Next Time!')
        isTimeArea.highlight(2)

        nextArea = Region(92,861,355,78)
        isNextArea = nextArea.exists(Pattern("1629013326373.png").similar(0.97), 5)
        if isNextArea is None:
            print('沒找到下一個按鈕')

            noFightCount += 1
            print(noFightCount)
            if(noFightCount % 3) == 0:
                type(Key.F5) 
                wait(5)
        else:
            print('切換到下一個!')
            isNextArea.click("1629013326373.png")
            isNextArea.highlight(2)
            nextCount += 1
            print(nextCount)
            if(nextCount % 5) == 0:
                type(Key.F5) 
                wait(5)
            mouseMove(-100,0)
    