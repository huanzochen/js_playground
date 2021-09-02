while True:
    timeArea = Region(1295,442,240,57)
    isTimeArea = timeArea.exists(Pattern("1630382536511.png").similar(0.9), 5)
    if isTimeArea is None:
        print('hi')
    
    
    else:
        print('沒 Next Time! 開始打架!')
        wait(2)
        isTimeArea.click(Pattern("1630382536511.png").similar(0.9))
        mouseMove(-100,0)
    
        aaMonsterArea = Region(1217,448,304,53)
        isAaMonsterArea = aaMonsterArea.exists(Pattern("1630382730037.png").similar(0.9), 5)
        if isAaMonsterArea is None:
            print('no')
        else:
            aaMonsterArea.click(Pattern("1630382730037.png").similar(0.9))
            wait(2)
        
            sixtyMonsterArea = Region(1307,435,265,71)
            isSixtyMonsterArea = sixtyMonsterArea.exists(Pattern("1630382298475.png").similar(0.9), 5)
            if isSixtyMonsterArea is None:
                print('沒找到 Fight 按鈕')
                
            else:
                print('找到 Fight 開始打架!')
                isSixtyMonsterArea.highlight(2)
                sixtyMonsterArea.click(Pattern("1630382298475.png").similar(0.9))