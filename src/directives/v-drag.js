const isMobile = !navigator.userAgent.match('Windows')

export default {
  mounted(el) {
    const oDiv = el; // 当前元素
    const dragEle = document.getElementById("rock");
    const parent = dragEle?.parentElement;
    // 能移动的最高距离（与初始位置相比）
    const minTop = oDiv.getAttribute("drag-min-top");
    // 能移动的最低距离（与初始位置相比）
    const maxTop = parent?.clientHeight - dragEle?.offsetHeight;
    // 能移动的最左距离（与初始位置相比）
    const minLeft = oDiv.getAttribute("drag-min-left");
    // 能移动的最右距离（与初始位置相比）
    const maxLeft = parent.clientWidth - dragEle.offsetWidth;
    const ifMoveSizeArea = 20;
    oDiv.onmousedown = (e) => {
      let target = oDiv;
      while (
        window.getComputedStyle(target).position !== "absolute" &&
        target !== document.body
      ) {
        target = target.parentElement;
      }

      document.onselectstart = () => {
        return false;
      };
      if (!target.getAttribute("init_x")) {
        target.setAttribute("init_x", target.offsetLeft);
        target.setAttribute("init_y", target.offsetTop);
      }

      const initX = parseInt(target.getAttribute("init_x"));
      const initY = parseInt(target.getAttribute("init_y"));

      // 鼠标按下，计算当前元素距离可视区的距离
      e = isMobile ? e.targetTouches[e.targetTouches.length - 1] : e;
      const disX = e.clientX - target.offsetLeft;
      const disY = e.clientY - target.offsetTop;
      document.onmousemove = (e) => {
        // 通过事件委托，计算移动的距离
        // 因为浏览器里并不能直接取到并且使用clientX、clientY,所以使用事件委托在内部做完赋值
        e = isMobile ? e.targetTouches[e.targetTouches.length - 1] : e;
        const l = e.clientX - disX;
        const t = e.clientY - disY;
        // 计算移动当前元素的位置，并且给该元素样式中的left和top值赋值
        target.style.left =
          (l < minLeft ? minLeft : l > maxLeft ? maxLeft : l) + "px";
        target.style.top =
          (t < minTop ? minTop : t > maxTop ? maxTop : t) + "px";
        if (
          Math.abs(l - initX) > ifMoveSizeArea ||
          Math.abs(t - initY) > ifMoveSizeArea
        ) {
          target.setAttribute("dragged", "");
        } else {
          target.removeAttribute("dragged");
        }
      };
      document.ontouchmove = document.onmousemove;
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.ontouchmove = null;
        document.onmouseup = null;
        document.ontouchend = null;
        document.onselectstart = null;
      };
      document.ontouchend = document.onmouseup;
      // return false不加的话可能导致黏连，拖到一个地方时div粘在鼠标上不下来，相当于onmouseup失效
      return false;
    };
    oDiv.ontouchstart = oDiv.onmousedown;
  },
};
