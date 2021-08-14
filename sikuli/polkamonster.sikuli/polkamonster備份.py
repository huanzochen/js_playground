import os  #导入os包  
print "測試" 

count = 0

while True:
    timeArea = Region(393,928,479,84)
    isTimeArea = timeArea.exists(Pattern("1628867179515.png").similar(0.97), 5)
    if isTimeArea is None:
        print('沒找到 Next Time! 開始打架!')
    
        sixtyMonsterArea =Region(1281,967,251,54)
        isSixtyMonsterArea = sixtyMonsterArea.exists(Pattern("1628867298396.png").similar(0.98), 5)
        if isSixtyMonsterArea is None:
            print('沒找到 Fight 按鈕')
            
        else:
            print('找到 Fight 開始打架!')
            isSixtyMonsterArea.highlight(2)
            isSixtyMonsterArea.click("1628867298396.png")
            
            metaArea = Region(2182,501,374,110)
            isMetaArea = metaArea.exists(Pattern("1628867539537.png").similar(0.98), 5)
            if isMetaArea is None:
                print('沒找到 meta按鈕!')
            else:
                print('找到meta, 點擊!')
                isMetaArea.highlight(2)
                isMetaArea.click("1628867539537.png")
                wait(30)
                type(Key.F5)
                wait(5)
    
    else:
        print('找到 Next Time!')
        isTimeArea.highlight(2)

        nextArea = Region(430,1027,451,83)
        isNextArea = nextArea.exists(Pattern("1628869424725.png").similar(0.98), 5)
        if isNextArea is None:
            print('沒找到下一個按鈕')
        else:
            print('切換到下一個!')
            isNextArea.click("1628869424725.png")
            isNextArea.highlight(2)
            count += 1
            print(count)
            if(count % 5) == 0:
                type(Key.F5) 
            wait(5)
            mouseMove(-100,0)
    