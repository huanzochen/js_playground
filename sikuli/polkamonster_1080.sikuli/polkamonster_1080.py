import os  #导入os包  
print "測試" 

nextCount = 0
noFightCount = 0
setThrowException(False)


while True:
    timeArea = Region(1,384,524,662)
    isTimeArea = timeArea.exists(Pattern("1629084760954.png").similar(0.9), 5)
    if isTimeArea is None:
        print('沒 Next Time! 開始打架!')
        wait(10)
    
        sixtyMonsterArea = Region(480,814,324,162)
        isSixtyMonsterArea = sixtyMonsterArea.exists(Pattern("1629013141015.png").similar(0.9), 5)
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
            sixtyMonsterArea.click(Pattern("1629013141015.png").similar(0.9))
            
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
                metaArea.click(Pattern("1629013168898.png").similar(0.98))
                wait(30)
                type(Key.F5)
                wait(5)
    
    else:
        print('找到 Next Time!')
        isTimeArea.highlight(2)

        nextArea = Region(25,807,460,123)
        isNextArea = nextArea.exists(Pattern("1629013326373.png").similar(0.92), 5)
        if isNextArea is None:
            print('沒找到下一個按鈕')

            noFightCount += 1
            print(noFightCount)
            if(noFightCount % 3) == 0:
                type(Key.F5) 
                wait(5)
        else:
            print('切換到下一個!')
            nextArea.click(Pattern("1629013326373.png").similar(0.92))
            isNextArea.highlight(2)
            nextCount += 1
            print(nextCount)
            if(nextCount % 10) == 0:
                type(Key.F5) 
                wait(5)
            mouseMove(-100,0)
    