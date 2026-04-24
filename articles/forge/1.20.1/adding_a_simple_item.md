## 環境説明
ModのID: `testmod`
Modのメインクラス: `TestMod.java`

## 1. Forgeへの登録を行うためのクラスを作成する
Forgeにアイテムの登録をするために、クラスファイルを`src/main/java/net/yourname/modid/`に追加します。
クラス名は`ItemDeferredRegister`とします。

私のModの場合は以下のようになります。
```java ItemDeferredRegister.java
package net.azowata.testmod;

import net.azowata.testmod.TestMod;
import net.minecraft.world.item.Item;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;

public class ItemDeferredRegister {

    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, TestMod.MOD_ID);

}
```
## 2. メインクラスで読み込ませる
Modのメインクラスから先ほど作成したクラスをForgeに読み込ませます。

コンストラクタに行を追加し、以下の記述を追加します。
```
ItemDeferredRegister.ITEMS.register(modEventBus);
```
私のModの場合は以下のようになります。
```java TestMod.java
package net.azowata.testmod;

import net.azowata.testmod.register.ItemDeferredRegister;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.ModLoadingContext;
import net.minecraftforge.fml.common.Mod;

@Mod(TestMod.MODID)
public class TestMod {

    public static final String MODID = "testmod";

    public TestMod() {
        IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();

        ItemDeferredRegister.ITEMS.register(modEventBus);
    }
}

```

## 3. アイテムを登録する
Forgeでは、アイテムを登録するために、`DeferredRegister`にアイテム登録用オブジェクトを登録します。

アイテムを登録するには、ItemDeferredRegisterクラスに以下のように記述します。

16個までスタックできるアイテム
```
public static final RegistryObject<Item> EXAMPLE_ITEM = ITEMS.register("example_item", () -> new Item(new Item.Properties().stackSize(16)));
```

私のModの場合は以下のようになります。

```java ItemDeferredRegister.java

package net.azowata.testmod;

import net.azowata.testmod.TestMod;
import net.minecraft.world.item.Item;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public class ItemDeferredRegister {
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, TestMod.MOD_ID);

    public static final RegistryObject<Item> EXAMPLE_ITEM = ITEMS.register("example_item", () -> new Item(new Item.Properties().stacksTo(16)));
}

```               
アイテムの登録名は`example_item`です。アイテムのプロパティは以下のものが使用可能です。
<details><summary>Item.Properties</summary>

- `stacksTo()` アイテムのスタック数を設定します。デフォルトは64です。
- `.durability()` アイテムの耐久値を設定します。
- `.defaultDurability()` アイテム作成時の耐久値を設定します。
- `.fireResistance()` アイテムが火炎で消滅しなくなります。デフォルトはfalseです。
- `.craftRemainder()` アイテムをレシピに使用したとき、クラフト時に何が残るかを設定します。
- `.setNoRepair()`
- `.food()` アイテムを食べ物にします。 -> 食べ物を追加する
- `.rarity()` アイテムのレアリティを設定します。

<details><summary>Rarityクラスの定数一覧</summary>

- `Rarity.COMMON` 白色
- `Rarity.UNCOMMON` 黄色
- `Rarity.RARE` 水色
- `Rarity.EPIC` 紫色

</details>
</details>